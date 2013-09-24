$(function(){
    $('#selectEpisode').on('submit',function(e){
        e.preventDefault();
        var episode = $('#episode').val();
        var number = $('#no').val();
        var imageId = $('#imageId').val();
        if(imageId){
            var url = ('http://mogashi.no-ip.org/alice/?id=' + imageId);
        }else if(episode && number){
            var url = ('http://mogashi.no-ip.org/alice/?ep=' + episode + '&no=' + number);
        }else{
            var url = 'http://mogashi.no-ip.org/alice/';
        }
        $('#AliceImage').attr('src', url);
    });
    $('#randomBtn').on('click',function(){
       var url = 'http://mogashi.no-ip.org/alice/';
       $('#AliceImage').attr('src', url);
    });
})
