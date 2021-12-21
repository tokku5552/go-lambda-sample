import { aws_lambda, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

export class GoLambdaSampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new aws_lambda.Function(this, "lambdaGoSample", {
      runtime: aws_lambda.Runtime.GO_1_X,
      handler: "main",
      code: aws_lambda.Code.fromAsset(`./lambda`),
    });
  }
}
