//returns the iframe html code to be embedded upon click of button
function addCode(topic) {
    return '<iframe id="iframe" src="' + topic + '.html" width="700" height="450"></iframe>';
}
                
//determines which html file should load on iframe on click of button
$(function() {
    $(this).click(function() {
        var topic_name = this.id;
        if(!$("#iframe").length) {
            $("#bio").html(addCode(topic_name));
        }
    });
});

