import { Image } from 'antd';
import { Item_T } from '../../../../../../Shared/types';

const ImagePreviewGroup = ({item}: {item: Item_T}) => {

    let {images_links} = item

    return <div>
        <Image.PreviewGroup
        preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
        }}
    >   
        {images_links.map(image_link => {
            return <Image width={100} style={{objectFit: 'cover'}} height={100} src={image_link} />
        })}
        
        
    </Image.PreviewGroup>
    </div>
}
    


export default ImagePreviewGroup;