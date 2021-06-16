import React, {useEffect, useState} from "react"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//
import MarkdownIt from "markdown-it"
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import parse from "html-react-parser"
import marked from "marked";
// css
import "../../style/md/darkTheme.css"
import "../../style/md/md.css"
// config
import { mdOpt } from "./config";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const md = MarkdownIt(mdOpt)
const mdToHtml = (text) => {
    const result = md.render(text)
    return result
}

const MdPreview = () => {
    const classes = useStyles();
    const [mdValue, setMdValue] = useState("# Write your markdown");
    const [mdOutput, setMdOutput] = useState("")
    const [mdDefaultVal] = useState("# Write your markdown")

    useEffect(() => {
        setMdOutput(mdToHtml(mdDefaultVal))
    },[])

    const handleChange = (event) => {
        const val = event.target.value
        setMdValue(val)
        const output = mdToHtml(val)
        setMdOutput(output)
    };

    return (
        <Container>
            <Grid container direction="column" spacing={4}>
                <Grid item>
                    {/* search keyword */}
                    <Box my={4} />

                {/* control panel: upload file, output file */}
                </Grid>
                <Grid item container direction="row" spacing={4} md={12}>
                    <Grid item md={6}>
                        {/*<Box maxHeight="80vh" overflow="auto">*/}
                            <TextField
                                className={classes.root}
                                id="outlined-multiline-static"
                                label="Markdown"
                                multiline
                                rows={30}
                                onChange={handleChange}
                                defaultValue={mdDefaultVal}
                                variant="outlined"
                                fullWidth
                            />
                        {/*</Box>*/}
                    </Grid>
                    <Grid item md={6}>
                        <Box maxHeight="580px" overflow="auto">
                            {parse(mdOutput)}
                        </Box>
                    </Grid>
                </Grid>
                <Grid>
                    <Box my={10} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default MdPreview