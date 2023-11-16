import { Tag } from "antd";

/**
 * Generates a mapping between priority values and corresponding React elements (Tags).
 *
 * @returns {Record<string, React.ReactNode>} - An object mapping priority values to Tag components.
 */
export const getPriorityTagMap = (): Record<string, React.ReactNode> => {
  return {
    low: <Tag color="blue">Low</Tag>,
    medium: <Tag color="orange">Medium</Tag>,
    high: <Tag color="red">High</Tag>,
  };
};
