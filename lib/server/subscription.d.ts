import { DocumentNode, ExecutionResult } from 'graphql';
import { AmplifyAppSyncSimulator } from '..';
import { AppSyncSimulatorServerConfig } from '../type-definition';
export declare type GraphQLClientSubscription = {
    context: any;
    variables: Record<string, any>;
    topicId: string;
    asyncIterator: AsyncIterableIterator<any>;
    document: DocumentNode;
    isRegistered: boolean;
};
export declare class SubscriptionServer {
    private config;
    private appSyncServerContext;
    private clientRegistry;
    private mqttIteratorTimeout;
    private mqttWebSocketServer;
    private mqttServer;
    private realtimeServer;
    private realtimeSocketServer;
    url: string;
    private port;
    constructor(config: AppSyncSimulatorServerConfig, appSyncServerContext: AmplifyAppSyncSimulator);
    start(): Promise<any>;
    stop(): void;
    afterMQTTClientConnect(client: any): Promise<void>;
    afterSubscription(topic: any, client: any): Promise<void>;
    afterMQTTClientUnsubscribe(topic: any, client: any): void;
    afterMQTTClientDisconnect(client: any): void;
    register(document: DocumentNode, variables: Record<string, any>, context: any, asyncIterator: AsyncIterableIterator<ExecutionResult>): Promise<{
        extensions: {
            subscription: {
                mqttConnections: {
                    url: string;
                    topics: string[];
                    client: any;
                }[];
                newSubscriptions: {
                    [x: number]: {
                        topic: string;
                        expireTime: number;
                    };
                };
            };
        };
    }>;
}
