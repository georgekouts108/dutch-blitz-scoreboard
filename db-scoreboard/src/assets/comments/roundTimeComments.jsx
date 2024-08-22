export const roundTimeCommentsFast = [
    "All right, who's the imbecile that cheated?!", 
    "Did someone not shuffle their cards properly??",
    "Impossible!"
];

export const roundTimeCommentsSlow = [
    "Come on, lads! Wake up already!", 
    "What, pray tell, has taken so long??",
    "Wake up, sleepyheads!"
];

export const roundTimeCommentsAverage = [
    "Hope all ye lads and lasses fared well!", 
    "Comment 2",
    "Comment 3"
];

export function getRoundTimeComment(roundTime) {

    var comment_index = 0

    if (roundTime < 60) { // 1 min or less
        comment_index = Math.floor(Math.random() * (roundTimeCommentsFast.length));
        return roundTimeCommentsFast[comment_index];
    }
    else if (60 <= roundTime < 240) { // 1 to 4 minutes
        comment_index = Math.floor(Math.random() * (roundTimeCommentsAverage.length));
        return roundTimeCommentsAverage[comment_index];
    }
    
    comment_index = Math.floor(Math.random() * (roundTimeCommentsSlow.length));
    return roundTimeCommentsSlow[comment_index];
    
}