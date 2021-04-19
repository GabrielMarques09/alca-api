import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CategoryModule } from './category/category.module'
import { Category } from './category/category.entity'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ProductModule } from './product/product.module'
import { BrandModule } from './brand/brand.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true
      })
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    CategoryModule,
    ProductModule,
    BrandModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
