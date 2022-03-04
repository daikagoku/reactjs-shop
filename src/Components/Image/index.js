import {useImperativeHandle,useEffect,useRef,forwardRef,memo,useMemo} from 'react';
import styles from './styles.module.css';

const Image = (function(){
	return function({src,srcDefault,alt,className,cover,contain,...props},ref){
		const thisRef = useRef();
		let Attr = {
			...props,
			ref:thisRef,
			type:"image",
			className:styles.image,
			loading:"lazy",
			alt:'description of image'
		};
		if(className){
			Attr.className +=" "+className;
		};
		if(alt){
			Attr.alt=alt;
		};
		if(contain){
			Attr.className +=" "+styles.contain;
		}else if(cover){
			Attr.className +=" "+styles.cover;
		}
		Attr['src'] = useMemo(function(){
			if(src){
				return src;
			}else if(srcDefault){
				return srcDefault;
			}else{
				return "/img/default-no-img.jpg";
			};
		},[src]);
		useImperativeHandle(ref,()=>({
				...thisRef.current
			})
		);
		return(
			<img
				{...Attr}
			/>
		);
	};	
})();
export default memo(forwardRef(Image));