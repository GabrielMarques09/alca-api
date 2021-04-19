import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { ProductService } from '../product.service'

@ValidatorConstraint({ name: 'categorySlugIsUnique', async: true })
export class ProductSlugIsUnique implements ValidatorConstraintInterface {
  constructor(private readonly productService: ProductService) {}

  async validate(
    text: string,
    validationArgumentos: ValidationArguments
  ): Promise<boolean> {
    console.log('validate', text, validationArgumentos)
    const id = validationArgumentos.object['id']
    const category = await this.productService.findBySlug(text)
    if (category) {
      if (id) {
        if (id === category.id) return true
      }
      return false
    }
    return true
  }
  defaultMessage(): string {
    return 'Slug must be unique'
  }
}
