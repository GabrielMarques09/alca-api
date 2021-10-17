import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { useContainer } from 'class-validator'
import * as session from 'express-session'
import * as passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  useContainer(app.select(AppModule), { fallbackOnErrors: true })
  const PORT = process.env.PORT || 3007
  app.setGlobalPrefix('api')
  app.use(
    session({
      cookie: {
        maxAge: 86400000
      },
      secret: 'asdadadadadadada',
      resave: false,
      saveUninitialized: false
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3001)
}
bootstrap()
