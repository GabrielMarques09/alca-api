import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsUUID, Length, Validate } from 'class-validator'
import { UserEmailIsUnique } from '../validations/UserEmailIsUnique'

@InputType()
export class UserPassUpdateInput {
  @Field()
  @IsUUID()
  id: string

  @Field()
  @Length(3)
  passwd: string
}
