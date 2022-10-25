import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLessonInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  contents: string;

  @Field(() => String)
  num: string;

  @Field(() => Date)
  startDate: Date;

  @Field(() => String)
  period: string;

  @Field(() => [String], { nullable: true })
  image: string[];

  @Field(() => String, { nullable: true })
  location: string;
}
