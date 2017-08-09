export class ApiBind {
    name: string;
    bind: ApiBind[];
};
export class ApiDefinition {
    name: string;
    summary: string;
    properties: ApiProperty[];
};
export class ApiDocument {
    basePath: string;
    info: ApiInfo;
    headers: ApiHeader[];
    resources: ApiResource[];
    definitions: ApiDefinition[];
};
export class ApiHeader {
    name: string;
    values: string[];
};
export class ApiInfo {
    version: string;
    title: string;
    description: string;
};
export class ApiParameter {
    name: string;
    summary: string;
    type: ApiType;
    bindInclude: ApiBind[];
    source: string;
    required: boolean;
    defaultValue: any;
};
export class ApiProperty {
    name: string;
    summary: string;
    type: ApiType;
    required: boolean;
    obsolete: boolean;
};
export class ApiResource {
    groupName: string;
    path: string;
    method: string;
    summary: string;
    produces: string[];
    parameters: ApiParameter[];
    responses: ApiResponse[];
    obsolete: boolean;
};
export class ApiResponse {
    statusCode: number;
    summary: string;
    type: ApiType;
    bindExclude: ApiBind[];
};
export class ApiType {
    name: string;
    value: any;
    format: string;
    definition: string;
    itemType: ApiType;
    additionalTypes: ApiType[];
};
export class DocUrl {
    url: string;
    default?: boolean;
}