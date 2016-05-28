//fixMozillaZIndex=true; 
//Fixes Z-Index problem  with Mozilla browsers but causes odd scrolling problem, toggle to see if it helps
_menuCloseDelay=150;
_menuOpenDelay=50;
_subOffsetTop=0;
_subOffsetLeft=0;
horizontalMenuDelay = true;
_horizontalMenuDelay = true;

with(menuStyle=new mm_style()){
bordercolor="#296488";
//bordercolor="red";
borderstyle="solid";
//borderwidth=2;
borderwidth=0;
fontfamily="Arial,Verdana, Tahoma, Arial";
fontsize="14";
fontstyle="normal";
//fontweight="bold";
headerbgcolor="#ffffff";
headercolor="#000000";
offbgcolor="#DCE9F0";
//offcolor="#515151";
offcolor="#000000";
onbgcolor="#4F8EB6";
oncolor="#ffffff";
//outfilter="randomdissolve(duration=0.3)";
//overfilter="Fade(duration=0.2);Alpha(opacity=100);Shadow(color=#777777', Direction=135, Strength=5)";
padding=6;
imagepadding=2;
//pagebgcolor="#82B6D7";
pagecolor="black";
separatorcolor="#2D729D";
separatorsize=1;
subimage="/menu3/downboxed.gif";
subimagepadding=2;
}

with(vertStyle=new mm_style()){
styleid=1;
bordercolor="#999999";
borderstyle="solid";
borderwidth=2;
fontfamily="arial, tahoma";
fontsize="12";
fontstyle="normal";
headerbgcolor="#AFD1B5";
headerborder=1;
headercolor="#000099";
image="/menu3/18_blank.gif";
imagepadding=4;
imagewidth=16;
//menubgimage="/menu3/backoff_grey.gif";
offbgcolor="transparent";
offcolor="#000000";
onbgcolor="#FEFAD2";
onborder="1px solid #999999";
oncolor="#000000";
onsubimage="/menu3/on_13x13_greyboxed.gif";
outfilter="randomdissolve(duration=0.2)";
overfilter="Fade(duration=0.1);Alpha(opacity=100);Shadow(color=#777777', Direction=135, Strength=3)";
padding=3;
pagebgcolor="#CFE2D1";
pagecolor="#000066";
pageimage="/menu3/db_red.gif";
separatoralign="right";
separatorcolor="#999999";
separatorpadding=1;
separatorwidth="85%";
subimage="/menu3/black_13x13_greyboxed.gif";
menubgcolor="#F5F5F5";
}


with(milonic=new menuname("Profile")){
margin=3;
style=vertStyle;
aI("image=/img/i/t_spill.gif;text=My Profile;url=/profile.cfm;");
aI("image=/img/i/t_scales.gif;text=My Stats & Ranks;url=/my_stats.cfm;");
aI("image=/img/trophy.gif;text=Major Badge Chart;url=/mybadges.cfm;");
aI("image=/img/i/t_blueplus.gif;text=Level Perks;url=/perks.cfm;");
aI("image=/img/i/t_info.gif;text=Sitewide;url=/today.cfm;showmenu=sitewide");
aI("image=/img/i/t_cog.gif;text=My Class;url=/class_today.cfm;showmenu=myclass");
aI("image=/img/i/t_users.gif;url=/team_info.cfm;text=My Team;showmenu=myteam;");
aI("image=/img/i/t_smiley.gif;text=My Friends;showmenu=myfriends;url=/friends_today.cfm;separatorsize=1;");
aI("image=/img/tell.gif;text=Refer Friends: Bonus Points!;url=/refer.cfm?home=1;separatorsize=1;");
<!---aI("image=/img/i/t_globe.gif;text=Worldwide;separatorsize=1;showmenu=worldwide");--->
aI("image=/img/i/t_cog.gif;text=My Single Questions: Edit!;url=/questionpost.cfm");
aI("image=/img/i/t_cog.gif;text=My Quizzes: Edit!;url=/quizlist2.cfm?myquizzes=1&rank=yes");
aI("image=/img/i/t_cog.gif;text=My Crosswords: Edit!;url=/crossword/mycross.cfm;separatorsize=1;");
aI("image=/img/i/t_clock.gif;text=My Quizzes: Recent Scores;url=/myquizscores.cfm;separatorsize=1;");
aI("image=/img/i/t_gold.gif;url=/gold.cfm;text=Gold Member Features;showmenu=gold;separatorsize=1;");

}
	
with(milonic=new menuname("sitewide")){
margin=3;
style=vertStyle;
aI("image=;text=Today;url=/today.cfm;");
aI("image=;text=Yesterday;url=/yesterday.cfm;");
aI("image=;text=Cumulative Points;url=/site_cumulative.cfm;");
aI("image=;text=Brain Leaders;url=/mostbrains.cfm;");
}

with(milonic=new menuname("myclass")){
margin=3;
style=vertStyle;
aI("image=;text=Today;url=/class_today.cfm;");
aI("image=;text=Yesterday;url=/class_yesterday.cfm;");
aI("image=;text=Cumulative Stats;url=/class.cfm;");
}

with(milonic=new menuname("myregion")){
margin=3;
style=vertStyle;

aI("image=;text=Information;url=/local_info.cfm;");
aI("image=;text=Today's Scores;url=/local_today.cfm;");
aI("image=;text=Message Board;url=/minigame/localboard.cfm;");
aI("image=;text=The World;url=/theworld.cfm;separatorsize=1;");
aI("image=;text=Edit My Region;url=/locationselect.cfm;");
}

with(milonic=new menuname("myteam")){
margin=3;
style=vertStyle;
aI("image=;text=Info;url=/team_info.cfm;");
aI("image=;text=Today;url=/team_today.cfm;");
aI("image=;text=Yesterday;url=/team_yesterday.cfm;");
aI("image=;text=Cumulative;url=/groupquizstats.cfm;");
aI("image=;text=Badges;url=/team_badges.cfm;");
aI("image=;text=Global Challenge;url=/minigame/friendstats.cfm;");
aI("image=;text=Knockout;url=/team_knockout.cfm;");
aI("image=;text=Message Board;separatorsize=1;url=http://www.funtrivia.com/bb2.cfm");
aI("image=;text=Configure...;url=/friends.cfm;");
}
with(milonic=new menuname("myfriends")){
margin=3;
style=vertStyle;
aI("image=;text=Today;url=/friends_today.cfm;");
aI("image=;text=Yesterday;url=/friends_yesterday.cfm;");
aI("image=;text=Cumulative;url=/friends_cumulative.cfm");
aI("image=;text=Knockout;url=/friends_knockout.cfm;separatorsize=1;");
aI("image=;text=Newest Quizzes;url=/special_lists.cfm?friends=1;separatorsize=1;");
aI("image=;text=Configure...;url=/friend_add.cfm;");
}


with(milonic=new menuname("gold")){
margin=3;
style=vertStyle;
//aI("image=;text=Play InstaQuiz Gold!;url=/insta/index.cfm?gold=1;");
aI("text=My Recent Quiz Play Scores;url=/myplayscores.cfm;");
aI("image=/new.gif;text=Play Gold Member Madness;url=/newtourn/;");
aI("image=;text=Play Lord of Obscurity!;url=/hourly3/;separatorsize=1");
aI("image=;text=My Quiz Playing Statistics;url=/goldstats.cfm");
aI("image=;text=My Global Challenge Statistics;url=/minigame/mycategories.cfm;separatorsize=1;");
aI("image=;text=Set Quiz Category Filters;url=/filter.cfm;");
aI("image=;text=Set New Quiz Notifications;url=/newquiznotify.cfm;");
aI("image=;text=Top Quizzes By Category;url=/catranks.cfm?cat=1;");
}

with(milonic=new menuname("quizzes")){
margin=3;
style=vertStyle;
aI("image=/img/i/t_list.gif;text=Quiz Home;url=/quizzes/index.cfm;");
aI("image=/img/i/t_watch.gif;text=Newest Quizzes;url=/special_lists.cfm?newest=1;");
aI("image=/img/i/t_butterfly.gif;text=New and Popular;url=/newandpopular.cfm");
aI("image=/img/i/t_users.gif;text=Mixed Quizzes;url=/special_lists.cfm?mixed=1");
aI("image=/img/i/t_piechart.gif;text=The Quiz Buffet;url=/quizmash.cfm;");
aI("image=/img/i/t_photo.gif;text=Newest Photo Quizzes;url=/special_lists.cfm?photos=1;");                                      
aI("image=/img/i/t_popular.gif;text=Newest Match Quizzes;url=/special_lists.cfm?match=1;");
aI("image=/img/i/t_users.gif;text=Newest Team Quizzes;url=/special_lists.cfm?team=1;separatorsize=1");                                            
aI("image=/img/i/t_browse.gif;text=Browse Categories;url=/quizzes;showmenu=categories;separatorsize=1;");
aI("image=/img/i/t_edchoice.gif;text=Editor's Choice;url=/ql.cfm?picks=1");
aI("image=/img/i/t_search.jpg;text=Double Point Quizzes;url=/special_lists.cfm?ratings=1");
aI("image=/img/i/t_edchoice.gif;text=Author Quiz Challenges;url=/special_lists.cfm?challenges=1");
aI("image=/img/i/t_popular.gif;text=Popular Quizzes;url=/recentscores.cfm;showmenu=mostplayed;");
aI("image=/img/i/t_search.gif;url=/ajax_regionalquiz.cfm;text=Search;showmenu=Search");
aI("image=/menu3/18_testimonial.gif;text=Suggest Quizzes I May Like;url=/special_lists.cfm?suggest=1;separatorsize=1;");
aI("image=/img/i/t_edchoice.gif;text=Most Points Today;url=/pointstoday.cfm;separatorsize=1;");
aI("image=/img/i/t_spill.gif;text=Author Central - Resources, etc;url=/author.cfm;");
aI("image=/img/i/t_spill.gif;text=Adventures in Authoring Game;url=/authorthis.cfm;");
aI("image=/img/i/t_spill.gif;text=Create New Quiz;url=/quiznew.cfm;");
}

with(milonic=new menuname("Search")){
margin=3;
style=vertStyle;aI("text=<FORM METHOD=GET ACTION=/search2_act.cfm name=search style='margin:10px'><table><tr><td class=backW>Search Titles:</td></tr><tr><td class=backW><input type=hidden name=type value=quizzes><input name=searchstring size=20></td></tr><tr><td><input type=submit value=Search></td></tr></table></form><br><FORM METHOD=GET ACTION=/profile_quizzes.cfm name=search style='margin:10px'><table><tr><td class=backW>Quizzes by Author:</td></tr><tr><td class=backW><input name=player size=20></td></tr><tr><td><input type=submit value=Search></td></tr></table></form>;type=form;align=center;onbgcolor=;onborder=;"); }

with(milonic=new menuname("mostplayed")){
margin=3;
style=vertStyle;
aI("image=/menu3/18_testimonial.gif;text=Within the Past 10 Mins;url=/recentscores.cfm;");
aI("image=/menu3/18_testimonial.gif;text=Within the Past 24 Hrs;url=/24hours.cfm;");
aI("image=/menu3/18_testimonial.gif;text=Within the Past Few Weeks;url=/special_lists.cfm?popular=1;");
}

with(milonic=new menuname("TriviaGames")){
margin=3;
style=vertStyle;
aI("image=/img/t_glob.gif;text=Daily Challenges;url=/dchallenge;separatorsize=1;");
aI("image=/img/i/vs_check.jpg;text=Quick Quiz;url=/quick/;");                                                          
aI("image=/img/t_clock.gif;text=Quiz of the Hour;url=/badge_quizofhour.cfm;");
aI("image=/img/t_glob.gif;text=The Global Challenge;url=/minigame/index.cfm?cat=13;separatorsize=1;");
aI("image=/img/t_clock.gif;text=Hourly: Piece of Cake (Easier);url=/hourly2/;");
aI("image=/img/t_clock.gif;text=Hourly: Mixed Trivia (Average);url=/intro/;");
aI("image=/img/t_clock.gif;text=Hourly: Who's The Smartest? (Difficult);url=/hourly/;separatorsize=1;");
aI("image=/img/t_clock.gif;text=Hourly: Who's The Expert? (Variable);url=/expert/;");
aI("image=/img/t_clock.gif;text=Hourly: Obscurity (GOLD);url=/hourly3/;");
aI("image=/img/t_clock.gif;text=Hourly: Word Wizard (word games);url=/word/;");
aI("image=/img/t_clock.gif;text=Hourly: Fill me In (fill in the blank);url=/fitb/");          
aI("image=/img/t_clock.gif;text=Hourly: FT Triathlon;url=/triboard.cfm");
aI("image=/img/t_clock.gif;text=Hourly: The Crystal Ball;url=/psychic/;separatorsize=1");
aI("text=Daily: FunTrivia Duel;url=/duel;");
aI("text=Daily: The Daily Game;url=/daily/;");
aI("text=Daily: Mind Melt;url=/mindmelt/;");
aI("text=Daily: Monster Quiz;url=/monster/;");
aI("text=Daily: Who am I?;url=/whoami/;");
aI("text=Daily: Team vs Team;url=/friends/");
aI("text=Daily: Team Heroes;url=/heroes/");
aI("text=Daily: Gold Member Madness (GOLD);url=/newtourn/;");
aI("text=Daily: The World Quiz (GOLD);url=/geo/;");
aI("text=Daily: Pot of Gold (GOLD);url=/potofgold/;");
aI("text=The Great Quiz Race (GOLD);url=/race.cfm;");
aI("text=The Ascension Quest (GOLD, lev 100+);url=/centurion.cfm;");
aI("text=Weekly: FunTrivia Knockout!;url=/knockout;separatorsize=1;");
aI("image=/menu3/18_product.gif;text=Ongoing: Quizzes;url=/quizzes/;");
aI("image=/menu3/18_color.gif;text=Ongoing: Crossword Puzzles;url=/crossword/;separatorsize=1;");
aI("image=/menu3/18_license.gif;text=InstaQuiz!;url=/insta/;");
aI("image=/menu3/18_lic.gif;text=InstaQuiz Scores;url=/insta/scores.cfm;");
}

with(milonic=new menuname("Hourly")){
margin=3;
style=vertStyle;
aI("image=/menu3/18_lic.gif;text=Trivia For All (Easier);url=/hourly2/;");
aI("image=/menu3/18_lic.gif;text=The Intro Game (Average);url=/intro/;");
aI("image=/menu3/18_lic.gif;text=Who's The Smartest? (Difficult);url=/hourly/;");
aI("image=/menu3/18_lic.gif;text=Lord of Obscurity (Obscure);url=/hourly3;separatorsize=1;");
aI("image=/img/i/t_globe.gif;text=Hourly World Games;url=/quiztime/submit.cfm;");
aI("image=/menu3/18_lic.gif;text=Word Wizard (word games);url=/word/;");
aI("image=/menu3/18_lic.gif;text=Fill me In (fill in the blank);url=/fitb/;");
}

with(milonic=new menuname("Daily")){
margin=3;
style=vertStyle;
aI("image=/menu3/18_freelic.gif;text=Daily Game: Team vs Team;url=/friends/;");
aI("image=/img/i/t_globe.gif;text=Daily Game: Regional Trivia;url=/local/;separatorsize=1;");
}

with(milonic=new menuname("regions")){
margin=3;
style=vertStyle;
aI("image=/img/flag_us.png;text=United States;url=/usa;");
aI("image=/img/flag_ca.png;text=Canada;url=/canada;");
aI("image=/img/flag_au.png;text=Australia;url=/australia;");
aI("image=/img/flag_uk.png;text=United Kingdom;url=/britain;");
aI("image=/img/flag_eu.gif;text=Europe;url=/europe;");
}

with(milonic=new menuname("Categories")){
margin=3;
style=vertStyle;
aI("image=/img/cattiny/1.gif;text=Animals;url=/ql.cfm?cat=1;");
aI("image=/img/cattiny/5.gif;text=Brain Teasers;url=/ql.cfm?cat=5;");
aI("image=/img/cattiny/24.gif;text=Celebrities;url=/ql.cfm?cat=24;");
aI("image=/img/cattiny/3.gif;text=Entertainment;url=/ql.cfm?cat=3;");
aI("image=/img/cattiny/20.gif;text=For Children;url=/ql.cfm?cat=20;");
aI("image=/img/cattiny/13.gif;text=General Knowledge;url=/ql.cfm?cat=13;");
aI("image=/img/cattiny/15.gif;text=Geography;url=/ql.cfm?cat=15;");
aI("image=/img/cattiny/14.gif;text=History;url=/ql.cfm?cat=14;");
aI("image=/img/cattiny/25.gif;text=Hobbies;url=/ql.cfm?cat=25;");
aI("image=/img/cattiny/22.gif;text=Humanities;url=/ql.cfm?cat=22;");
aI("image=/img/cattiny/19.gif;text=Literature;url=/ql.cfm?cat=19;");
aI("image=/img/cattiny/7.gif;text=Movies;url=/ql.cfm?cat=7;");
aI("image=/img/cattiny/8.gif;text=Music;url=/ql.cfm?cat=8;");
aI("image=/img/cattiny/21.gif;text=People;url=/ql.cfm?cat=21;");
aI("image=/img/cattiny/29.gif;text=Religion;url=/ql.cfm?cat=29;");
aI("image=/img/cattiny/9.gif;text=Science & Technology;url=/ql.cfm?cat=9;");
aI("image=/img/cattiny/10.gif;text=Sports;url=/ql.cfm?cat=10;");
aI("image=/img/cattiny/23.gif;text=Television;url=/ql.cfm?cat=23;");
aI("image=/img/cattiny/4.gif;text=Video Games;url=/ql.cfm?cat=4;");
aI("image=/img/cattiny/12.gif;text=World;url=/ql.cfm?cat=12;");
}


with(milonic=new menuname("Community")){
margin=3;
style=vertStyle;
aI("text=<b>Services</b>;url=/email;");
aI("image=/img/i/t_info.gif;text=Daily Email Trivia;url=/email");
aI("image=/img/i/t_host.gif;text=Create My Own Tournament (Free);url=/createtournament.cfm");
aI("image=/star.gif;text=Gold Membership Subscriptions;url=/upgrade.cfm;");
aI("image=/star.gif;text=Gold Membership Gift Certificates: Purchase;url=/gift/index.cfm;");                                                                  
aI("image=/star.gif;text=Gold Membership Gift Certificates: Activate a Gift;url=/gift/index.cfm;");                                                
aI("image=/img/i/t_host.gif;text=Host a Quiz Event Packages;url=/quiznight.cfm;");
aI("image=/img/i/t_qns.gif;text=Buy Researched Trivia Questions;url=/triviaquestions.cfm;");
aI("image=/img/i/t_qns.gif;text=Advertise on FunTrivia;url=https://adwords.google.com/select/OnsiteSignupLandingPage?client=ca-pub-0785480861181109&referringUrl=http://www.funtrivia.com&hl=en&gl=US;");

aI("image=/img/i/t_email.gif;text=Contact Us;url=/feedback.cfm;separatorsize=1;");
aI("text=<b>Community</b>;url=/forums");
aI("image=/menu3/18_news.gif;text=News;url=/bb.cfm?boardid=1000000;");
aI("image=/menu3/18_testimonial.gif;text=FunTrivia Discussion Forums;url=/forums;");
aI("image=/menu3/18_faq.gif;url=/ask.cfm;text=Ask FunTrivia;");
aI("image=/img/i/t_users.gif;text=Category Chat Boards;url=/bb.cfm?boardid=13;");
aI("image=/img/i/t_users.gif;text=Popular on Facebook;url=/info/facebookactivity.cfm;");
aI("image=/img/i/t_geog.gif;text=Local Meet-Ups & Chat;url=/templates/meetup.cfm;separatorsize=1;");

aI("text=<b>Statistics</b>;url=/mystats.cfm?action=halloffame;");
aI("image=/img/i/t_edchoice.gif;;text=Most Recent Badge Winners;url=/badge_winners.cfm;");
aI("image=/img/i/t_edchoice.gif;;text=Most Recent Mini-Challenge Winners;url=/badgelet_winners.cfm;");                                   
aI("image=/img/i/t_edchoice.gif;text=FunTrivia Hall of Fame;url=/mystats.cfm?action=halloffame;");
aI("image=/menu3/18_whois.gif;text=Who's Online?;url=/recentscores.cfm;");
aI("image=/img/i/vs_users2.gif;text=Team Statistics;url=/teamstats.cfm;");
}


with(milonic=new menuname("Info")){
margin=3;
style=vertStyle;

aI("text=Introduction;url=/welcome.cfm");
aI("text=FunTrivia News;url=/bb.cfm?boardid=1000000");
aI("text=Earning Points;url=/points.cfm");
aI("text=Earning Badges;url=/challenges.cfm");
aI("text=Multiple Accounts & Cheating;url=/cheating.cfm");
aI("text=Creating Quizzes;url=/ql.cfm?cat=3533");
aI("text=Creating Tournaments;url=/createtournament.cfm;separatorsize=1");
aI("text=FunTrivia Time Schedule;url=/bb.cfm?action=details&qnid=24533&boardid=1000000;separatorsize=1");
aI("text=Free vs Gold Membership;url=/freevsgold.cfm");
aI("text=What is Gold Membership?;url=/gold.cfm;separatorsize=1");
aI("text=Frequently Asked Questions;url=/ftfaq.cfm");
aI("image=/img/i/t_email.gif;text=Contact Us;url=/feedback.cfm;separatorsize=1;");                                                               
}

with(milonic=new menuname("myteam_scores")){
margin=3;
style=vertStyle;
aI("text=Recent Badge Winners;url=/team_badges.cfm;image=/img/icon14.gif");
aI("text=Scores Today;url=/team_today.cfm;");
aI("text=Scores Yesterday;url=/team_yesterday.cfm;separatorsize=1;");
}

with(milonic=new menuname("Services")){
margin=3;
style=vertStyle;

aI("url=/team_info.cfm;text=<b>My Team</b>;");
aI("text=Information & Ranks;url=/team_info.cfm;image=/img/i/t_info.gif");
aI("text=Team Message Board;url=/bb2.cfm;image=/img/i/t_users.gif");
aI("text=Our Team Quizzes;url=/team_workshop.cfm;image=/img/i/t_pen.gif");
aI("text=Who's Online?;url=/team_on.cfm;image=/img/i/t_clock.gif");
aI("text=Scores and Awards;showmenu=myteam_scores;url=/team_badges.cfm;separatorsize=1");

aI("text=<b>All Teams</b>;url=/teamstats_daily.cfm;");
aI("text=Teams That Are Recruiting;url=/minigame/localboard.cfm?boardid=general_joinmygroup;image=/img/i/t_news.gif");
aI("text=Stats and Ranks;showmenu=myteam_allstats;url=/teamstats_daily.cfm;image=/img/i/t_piechart.gif;separatorsize=1");
aI("text=Create a Team...;url=/friends.cfm?action=create;");
aI("text=Find / Join a Team...;url=/friends.cfm;");
}

with(milonic=new menuname("myteam_allstats")){
margin=3;
style=vertStyle;
aI("text=Yesterday's Hourly Games;url=/teamstats_daily.cfm;image=/img/i/t_clock.gif;separatorsize=1");                                       
aI("text=This Month's Ranks;url=/tvt_thismonth.cfm;image=/img/i/t_piechart.gif");
aI("text=Last Month's Final Ranks;url=/tvt_lastmonth.cfm;image=/img/i/t_histogram.gif");

}

with(milonic=new menuname("Sample search")){
margin=3;
style=vertStyle;
aI("text=SEARCH;");
}

with(milonic=new menuname("Challenge")){
margin=3;
style=vertStyle;
aI("image=/menu3/18_color.gif;text=Introduction;url=;");
aI("image=/menu3/18_color.gif;text=Play Now;url=;");
aI("image=/menu3/18_color.gif;text=Leaderboards;url=;");

}

