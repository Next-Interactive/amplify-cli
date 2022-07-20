import { GraphQLResolveInfo } from 'graphql';
export declare function createInfo(info: GraphQLResolveInfo): {
    fieldName: any;
    variables: any;
    parentTypeName: any;
    selectionSetList: any[];
    selectionSetGraphQL: string;
};
