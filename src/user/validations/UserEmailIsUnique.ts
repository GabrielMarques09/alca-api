import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { UserService } from '../user.service'

@ValidatorConstraint({ name: 'userEmailIsUnique', async: true })
export class UserEmailIsUnique implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(
    text: string,
    validationArgumentos: ValidationArguments
  ): Promise<boolean> {
    console.log('validate', text, validationArgumentos)
    const id = validationArgumentos.object['id']
    const user = await this.userService.findByEmail(text)
    if (user) {
      if (id) {
        if (id === user.id) return true
      }
      return false
    }
    return true
  }
  defaultMessage(): string {
    return 'Email must be unique'
  }
}
