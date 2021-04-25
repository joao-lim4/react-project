import React, { useState, useEffect } from 'react';
import { Container, BoxArquivos, TextNameArquivo, Mark, Relative } from './Styles';



export default ({props, files, selectFile, atualIndex, atualFile}) => {

    const [dataFiles, setDatafiles] = useState([]);


    useEffect(() => {
        if(files.length){
            setDatafiles(files);
        }
    }, [files]);


  

    return (
        <Container>
            <Relative>
                {dataFiles.length ? dataFiles.map((v,i) => {
                    return (
                        <BoxArquivos onClick={() => selectFile(i)} key={i} len={dataFiles.length} index={i}>
                            { atualFile == null ? false : i == atualIndex ? (
                                <Mark />
                            ) : false
                            }
                            <TextNameArquivo>{v.name}</TextNameArquivo>
                        </BoxArquivos>
                    )
                }) : false
                }
            </Relative>
        </Container>
    )
}