import React, {useState, useEffect} from 'react';
import { Container, DefaultView, ContainerMarkdow, ViewTitle, Title, ViewMarckDown } from './Styles';
import MenuComponent from './menu/Menu.component';
import ReactMarkdown from 'react-markdown';
import Lima from '../../Marks/Lima.md';
import Exemple from '../../Marks/Exemple.md';
import Readme from '../../Marks/Readme.md';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

//plujgins 
import gfm from 'remark-gfm';
import breaks from 'remark-breaks';
import html from 'remark-html';
import htmlKatex from 'remark-html-katex';
import a11yEmoji from '@fec/remark-a11y-emoji';
import removeComments from 'remark-remove-comments';
import utf8 from "remark-utf8";
import externalLinks from 'remark-external-links';
import images from 'remark-images';
import parser from 'remark-parse';
//fim

const arrFile = [
    {
        name: 'Readme.md',
        file:  '',
    },
    {
        name: 'Lima.md',
        file: ''
    },
    {
        name: 'Exemple.md',
        file: ''
    }
];


export default props => {

    const [files, setFiles] = useState([]);
    const [atualFile, setAtualFile] = useState(null)
    const [atualIndex, setAtualIndex] = useState(0);
    const [load, setLoad] = useState(true)

    useEffect(() => {
        (() => {
            let cl = [...arrFile];
            arrFile.forEach((v,i) => {
                fetch(v.name == 'Lima.md' ? Lima : v.name == 'Exemple.md' ? Exemple : Readme).then((response) => response.text()).then((text) => {
                    cl[i].file = text;
                });
            });
            
            setFiles(cl);

        })();
    }, []);
    
    const selectFile = i => {
        setAtualFile(arrFile[i]);
        setAtualIndex(i);
    }

    const components = {
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
          ) : (
            <code className={className} {...props} />
          )
        }
    }

    return (
        <Container>
            <DefaultView >
                <MenuComponent files={files} atualFile={atualFile} selectFile={i => selectFile(i)} atualIndex={atualIndex}/>
                <ContainerMarkdow>
                    <ViewTitle>
                        <Title>{atualFile != null ? atualFile.name : 'Selecione um arquivo'}</Title>
                    </ViewTitle>
                    
                    <ViewMarckDown>
              
                        {atualFile !=  null ? (
                            <ReactMarkdown components={components}  className="preview" remarkPlugins={[
                                utf8,
                                gfm, 
                                html,
                                breaks,
                                htmlKatex,
                                a11yEmoji,
                                removeComments,
                                externalLinks,
                                images,
                                parser,
                            ]} children={atualFile.file} />
                        ) : false
                        }
                    </ViewMarckDown>
                </ContainerMarkdow>
            </DefaultView>
        </Container>
    )
}