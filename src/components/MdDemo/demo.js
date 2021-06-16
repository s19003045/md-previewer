
export const demoJxs1 = `
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
    `

export const demoJxs2 = `
        import React from "react"
        import hljs from "highlight.js"
        import MarkdownIt from "markdown-it"    
        import parse from "html-react-parser"
        // css
        import "./mdGithubDark.css"
        
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
    `

