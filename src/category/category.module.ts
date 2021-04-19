import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryResolver } from './category.resolve'
import { CategoryService } from './category.service'
import { Category } from './category.entity'
import { CategorySlugIsUnique } from './validations/CategorySlugIsUnique'

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService, CategoryResolver, CategorySlugIsUnique]
})
export class CategoryModule {}
