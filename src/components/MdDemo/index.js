import React, {useEffect, useState} from "react"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from '@material-ui/core/Divider';
import MarkdownIt from "markdown-it"
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import parse from "html-react-parser"
import marked from "marked";
import { text } from "./md/mdText"
// css
import "../../style/md/darkTheme.css"
import "../../style/md/md.css"
//
import { mdOpt } from "./config";
import { demoJxs1, demoJxs2 } from "./demo";


const MdDemo = ()=>{
    const md = MarkdownIt(mdOpt)
    const result = md.render(text)

    const _html = hljs.highlight(demoJxs1, {language: 'jsx'}).value

    const mdDesc = hljs.highlight(demoJxs2, {language: 'jsx'}).value

    return (
        <Container>
            <Box mb={10}>
                <Grid container direction="column" spacing={4}>
                    <Box my={4} />
                    <Grid>
                        <Box my={2}>
                            <h2>使用 marked 套件 parse markdown</h2>
                            <div>
                                {parse(marked('# Marked in the browser\n\nRendered by **marked**.'))}
                            </div>
                        </Box>
                    </Grid>
                    <Divider />
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
                    <Divider />
                    <Grid item>
                        <h1>Markdown preview</h1>
                        <div>
                            {parse(result)}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default MdDemo