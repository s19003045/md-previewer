import React, {useEffect, useState} from "react"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from '@material-ui/core/Divider';
import MarkdownIt from "markdown-it"
import hljs from "highlight.js"
import parse from "html-react-parser"
import marked from "marked";
import { text } from "./md/mdText"
// css
import "../../style/mdGithubDark.css"



const mdOpt = {
    html:         true,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                // This is only for full CommonMark compatibility.
    breaks:       true,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                // useful for external highlighters.
    linkify:      true,        // Autoconvert URL-like text to links

    // Enable some language-neutral replacement + quotes beautification
    // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
    typographer:  true,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externally.
    // If result starts with <pre... internal wrapper is skipped.
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {}
        }

        return ''; // use external default escaping
    }
}

const MdPreview = ()=>{
    const md = MarkdownIt(mdOpt)
    const result = md.render(text)
    const [mdText, setMdText] = useState(null)


    useEffect(() => {
        const filePath = require("./md/mdText.md");

        fetch(filePath)
            .then(response => {
                // console.log(response)
                return response.text()
            })
            .then(text => {
                // console.log(marked(text))
                setMdText({
                    markdown: marked(text)
                })
            })
    }, [])

    const _html = hljs.highlight(`
        import React from "react"
        import hljs from "highlight.js"
        import parse from "html-react-parser"
        // css
        import "../../style/mdGithubDark.css"
        
        function Component(){
            const _html = hljs.highlight(\`\<h1\>Hello world\<\/h1\>\`, {language: 'javascript'}).value
            ...
            return (
                <div>
                    <pre>
                        <code>
                            {parse(_html)}
                        </code>
                    </pre>
                </div>
            )
        }
    `, {language: 'jsx'}).value

    const mdDesc = hljs.highlight(`
        import React from "react"
        import hljs from "highlight.js"
        import MarkdownIt from "markdown-it"    
        import parse from "html-react-parser"
        // css
        import "../../style/mdGithubDark.css"
        
        const mdOpt = {
            html:         true, 
            xhtmlOut:     false,
            breaks:       true,
            langPrefix:   'language-',
            linkify:      true,
            typographer:  true,
            quotes: '“”‘’',
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(lang, str).value;
                    } catch (__) {}
                }
        
                return ''; // use external default escaping
            }
        }
        
        function Component(){
            const md = MarkdownIt(mdOpt)
            // text 為載入的 markdown 文字
            const result = md.render(text)
            
            return (
                <div>
                    {parse(result)}
                </div>
            )
        }
    `, {language: 'jsx'}).value

    return (
        <Container>
            <Grid container direction="column" spacing={4}>
                <Box my={4} />
                <Grid item>
                    <Box my={2}>
                        <h2>使用 hljs.highlight</h2>
                        <div>
                            <pre>
                                <code>
                                   {parse(_html)}
                                </code>
                            </pre>
                        </div>
                    </Box>
                </Grid>
                <Divider />
                <Grid item>
                    <Box my={2}>
                        <h2>使用 MarkdownIt, 並設定 option</h2>
                        <div>
                            <pre>
                                <code>
                                   {parse(mdDesc)}
                                </code>
                            </pre>
                        </div>
                    </Box>
                </Grid>
                <Grid item>
                    <h1>Markdown preview</h1>
                    <div>
                        {parse(result)}
                        {/*<section>*/}
                        {/*    {mdText &&  <article dangerouslySetInnerHTML={{__html: mdText.markdown}}></article>}*/}
                        {/*</section>*/}
                        {/*{mdText && parse(mdText.markdown)}*/}
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MdPreview