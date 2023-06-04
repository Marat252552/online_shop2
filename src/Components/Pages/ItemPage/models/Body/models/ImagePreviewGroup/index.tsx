import React from 'react';
import { Image } from 'antd';
import { Item_T } from '../../../../../../Shared/types';
import { backendURL } from '../../../../../../App/config/env';

const ImagePreviewGroup = ({item}: {item: Item_T}) => {

    let {images_names} = item

    return <div>
        <Image.PreviewGroup
        preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
        }}
    >   
        {images_names.map(image_name => {
            return <Image width={100} style={{objectFit: 'cover'}} height={100} src={backendURL + '/' + image_name} />
        })}
        
        
    </Image.PreviewGroup>
    </div>
}
    


export default ImagePreviewGroup;