import { GraphQLScalarType } from 'graphql';
declare class AWSPhone extends GraphQLScalarType {
    constructor(options?: {
        name: any;
        description: any;
    });
}
export declare const scalars: {
    AWSJSON: any;
    AWSDate: any;
    AWSTime: any;
    AWSDateTime: any;
    AWSPhone: AWSPhone;
    AWSEmail: any;
    AWSURL: any;
    AWSTimestamp: any;
    AWSIPAddress: any;
};
export declare function wrapSchema(schemaString: any): string;
export {};
