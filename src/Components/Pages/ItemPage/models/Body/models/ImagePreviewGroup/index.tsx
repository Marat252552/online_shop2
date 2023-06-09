import { Image } from 'antd';
import { Item_T } from '../../../../../../Shared/types';

const ImagePreviewGroup = ({item}: {item: Item_T}) => {

    let {images} = item

    return <div>
        <Image.PreviewGroup
        preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
        }}
    >   
        {images.map(image => {
            return <Image width={100} style={{objectFit: 'cover'}} height={100} src={image.link} />
        })}
        
        
    </Image.PreviewGroup>
    </div>
}
    


export default ImagePreviewGroup;