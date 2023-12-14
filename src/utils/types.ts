export type Resource = {
  id: string;
  name: string;
  imgUrl: string;
};

export type ResourceArray = Resource[];
export type ResourceCount = number[];
export type ResourceMap = Record<string, number | undefined>;

export type TradeDefinition = {
  resources: ResourceMap;
  value: number;
};
