import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
}; 

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
      {children}
    </View>
    <View className="w-10 h-10 bg-blue-500" />
    </SafeAreaView>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
