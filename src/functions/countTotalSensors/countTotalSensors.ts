/**
 * Counts the total number of each sensor model in the given array of assets.
 *
 * @param {Asset[]} assetsData - An array of assets with sensor information.
 * @returns {Record<string, number>} - An object with sensor models as keys and their respective counts as values.
 */
export const countTotalSensors = (assetsData: Asset[]): Record<string, number> => {

    const sensorCounts: Record<string, number> = {};
  
    
    assetsData.forEach((asset: AssetSensors) => {
      
      asset.sensors.forEach((sensorModel: string) => {
        
        if (sensorCounts[sensorModel]) {
          
          sensorCounts[sensorModel]++;
        } else {
          
          sensorCounts[sensorModel] = 1;
        }
      });
    });
  
    
    return sensorCounts;
  };
  