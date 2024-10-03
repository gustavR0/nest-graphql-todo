import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
  @Query(() => String, { description: 'test description', name: 'hello' })
  helloWorld(): string {
    return 'hola mundo';
  }

  @Query(() => Float, { name: 'RamdomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int)
  getRandomFromZeroTo(
    @Args('arg', { nullable: true, type: () => Int, defaultValue: 6 })
    arg: number,
  ): number {
    return Math.floor(Math.random() * arg);
  }
}
