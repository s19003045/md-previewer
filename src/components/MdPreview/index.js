import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//
import MarkdownIt from "markdown-it";
import parse from "html-react-parser";
// css
import "highlight.js/styles/github-dark.css";
import "../../style/md/darkTheme.css";
import "../../style/md/md.css";
// config
import { mdOpt } from "./config";
import { getMdFile } from "./service";
//

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            paddingTop: theme.spacing(4),
            width: "25ch",
        },
    },
}));
const md = MarkdownIt(mdOpt);
const mdToHtml = (text) => {
    return md.render(text);
};

const MdPreview = () => {
    const classes = useStyles();
    const [mdValue, setMdValue] = useState("# Write your markdown");
    const [mdOutput, setMdOutput] = useState("");
    const [mdDefaultVal] = useState("# Write your markdown");
    const [curMd, setCurMd] = useState("");

    const outLinedInputRef = React.useRef();

    const handleChange = (event) => {
        const val = event.target.value;
        setCurMd(val);

        const view = mdToHtml(val);
        setMdOutput(view);
    };

    const getRandomMd = () => {
        getMdFile().then((data) => {
            // console.log(data);
            setCurMd(data);
        });
    };

    const handleRandomBtnClick = (e) => {
        getRandomMd();
    };

    useEffect(() => {
        getRandomMd();
    }, []);

    useEffect(() => {
        console.log(curMd);
        setMdOutput(mdToHtml(curMd));
        console.log("mdToHtml", mdToHtml(curMd));
    }, [curMd]);

    return (
        <Container>
            <Grid container direction="column" spacing={4}>
                <Grid item>
                    {/* search keyword */}
                    <Box my={4} />

                    {/* control panel: upload file, output file */}
                </Grid>
                <Grid item container>
                    <Grid item>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleRandomBtnClick}
                        >
                            Random file
                        </Button>
                    </Grid>
                </Grid>
                <Grid item container spacing={4} md={12}>
                    <Grid item md={6}>
                        {/*<Box maxHeight="80vh" overflow="auto">*/}
                        <TextField
                            className={classes.root}
                            id="outlined-multiline-static"
                            // label="Markdown"
                            multiline
                            ref={outLinedInputRef}
                            rows={30}
                            value={curMd}
                            onChange={handleChange}
                            // defaultValue={curMd}
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
    );
};

export default MdPreview;
