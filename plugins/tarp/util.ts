const githubLinkToRaw = (url: string) => {
    return url.replace("github.com", "raw.githubusercontent.com").replace("/blob", "");
}

export default {
    githubLinkToRaw
}