declare module 'expo-cached-image' {
    import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';
    
    interface CachedImagesProps {
		source?: ImageSourcePropType;
		style: StyleProp<ImageStyle>;
		cacheKey: string;
		resizeMode: string;
		ImageComponent?: React.ComponentType<any>;
	}
    
    class CachedImages extends React.Component<CachedImagesProps> {}
    export default CachedImages;
    }
    