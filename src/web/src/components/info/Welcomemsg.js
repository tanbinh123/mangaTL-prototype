import "./Welcomemsg.css";

export const Welcomemsg = function(props){
    return (
        <div className="welcome-main">
            <div className="welcome-title">
                <h3>Welcome to MangaTranslator</h3>
                <p>This a web for a tool to translate Manga/Manhwa/Manhua to language you want</p>
            </div>
            <div className="welcome-exam">
                <p>Here the example of result</p>
                <div className="exam-srcto">
                    <img src="/img/wlcsrc.jpg" alt="Exam Src"></img>
                    <h3>Into</h3>
                    <img src="/img/wlcto.jpg" alt="Exam To"></img>
                </div>
            </div>
        </div>
    );
}