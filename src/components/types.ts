export type TagProps = {
    name: string;
    id: number;
    callback: (id: number) => void;
    style: {};
  }
  

  export type HeaderProps = {
    onPress: (screen: string) => void;
  }