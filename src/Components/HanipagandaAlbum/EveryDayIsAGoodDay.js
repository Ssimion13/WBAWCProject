import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import "../../App.css";
import CheckboxButtons from '../Common/CheckboxButtons';

export default function EveryDayIsAGoodDay() {
  const [isVideoOpen, setIsVideoOpen] = React.useState(true);
  const [isJapaneseCharactersVisible, setIsJapaneseCharactersVisible] = React.useState(false);

  const JapaneseCharacterGrid = styled(Grid)({
    display: isJapaneseCharactersVisible ? "block" : "none"
  });

  //TODO: selectively render the text depending on user settings, add a button for each type
  //TODO: Figure out why the overlay is so damn big on the youtube player...
  return (
    <Grid container direction="column">
      {isVideoOpen &&
        <Grid item className="ytVideoContainer">
          <LiteYouTubeEmbed 
            id="8WhNIuqhOOo"  
            title="Toge"
            wrapperClass="yt-lite"
          />
        </Grid>
      }
          <CheckboxButtons 
            isVideoOpen={isVideoOpen} 
            isJapaneseCharactersVisible={isJapaneseCharactersVisible}
            setIsVideoOpen={() => setIsVideoOpen(!isVideoOpen)}
            setIsJapaneseCharactersVisible={() => setIsJapaneseCharactersVisible(!isJapaneseCharactersVisible)}
          />
      <Grid container item direction="column" className="textContainer translationMarginTop">          
        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                Hey, 積み上げては崩されちゃう <br/>
                理不尽なの　日々毎日 <br/>
                Yeah, 朝と夜と繰り返して <br/>
                ルーチンもてあまし <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Hey tsumiagete wa kuzusarechau <br/>
                Rifujin nano hibi mainichi <br/>
                Yeah, asa to yoru to kurikaeshite <br/>
                RUUCHIN mo teamashi <br/>
            </Grid>

            <Grid item className="englishText">
                Hey, what stacks up will come down <br/>
                It’s absurd, day after day, everyday <br/>
                Yeah, Repeating over again day and night <br/>
                The Routine is too much for me <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                どうせ同じだったら <br/>
                楽しくしちゃいたいよ <br/>
                ねえ、どうせ続くのなら <br/>
                次はもっと上手く積んじゃおう！ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Douse onaji dattara <br/>
                Tanoshiku shinaitai yo <br/>
                Nee, douse tsuzuku no nara <br/>
                Tsugi wa motto umaku tsumanjaou <br/>
            </Grid>

            <Grid item className="englishText">
                Well, if it’s all the same, <br/>
                I want to have fun with it! <br/>
                Hey, if it’s going to continue like this anyways <br/>
                On the next one let’s stack them well! <br/>
            </Grid> 

        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                楽しんじゃおうよ　Every day日々是好日 <br/>
                楽しんだ人の勝ち　この指とまれHappy <br/>
                楽しんじゃおうよ　Every day日々是好日 <br/>
                楽しめばイイキモチ <br/>
                全力You Only Live Once <br/>
            </JapaneseCharacterGrid> 

            <Grid item className="japaneseRomanizedText">
                Tanoshinjaou yo Every day nichi nichi kore kou nichi <br/>
                Tanoshinda hito no kachi kono yubitomare Happy <br/>
                Tanoshinjaou yo Every day nichi nichi kore kou nichi <br/>
                Tanoshimeba ii kimochi <br/>
                Zenryoku You Only Live Once <br/>
            </Grid>

            <Grid item className="englishText">
                Let’s have fun! Every day “Every day is a good day” <br/>
                It’s the victory of people who had fun,  *lets meet up here, guys!* Happy! <br/>
                Lets have fun together, Every day “Every day is a good day” <br/>
                With all we can, You only live once! <br/>
            </Grid> 
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                まあどの道このサイクルから <br/>
                抜けることは出来ないしさ <br/>
                じゃあ歯車として廻るうちも、 <br/>
                めいっぱい笑いたいな <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Maa dono michi kono SAIKURU kara <br/>
                Nukeru koto wa dekinai shi sa <br/>
                Jaa haguruma toshite mawaru uchi mo, <br/>
                Meippai waraitai na <br/>
            </Grid>
            
            <Grid item className="englishText">
                Well, since every ‘path’ is this cycle <br/>
                And there’s no way out <br/>
                Then, everyone who serves as a cog in the machine <br/>
                wants to laugh as much as they can, right? <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                どうせ同じだったら <br/>
                楽しくしちゃいたいよ <br/>
                ねえ、どうせ続くんだし <br/>
                少しずつ前に進もうよ！ <br/>
            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Douse oniji dattara <br/>
                Tanoshiku shichaitai yo <br/>
                Nee, douse tsuzukunda shi <br/>
                Sukushizutsu mae ni susumou yo! <br/>
            </Grid>
            
            <Grid item className="englishText"> 
                Well, if it’s all the same, <br/>
                I want to have fun with it! <br/>
                Hey, if it’s going to continue like this anyways <br/>
                Lets move forward one step at a time! <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <JapaneseCharacterGrid item className="japaneseCharacterText">
                楽しんじゃおうよ　Every day日々是好日 <br/>
                楽しんだ人の勝ち　この指とまれHappy <br/>
                楽しんじゃおうよ　Every day日々是好日 <br/>
                楽しめばイイキモチ <br/>
                全力You Only Live Once <br/>

            </JapaneseCharacterGrid>

            <Grid item className="japaneseRomanizedText">
                Tanoshinjaou yo Every day nichi nichi kore kou nichi <br/>
                Tanoshinda hito no kachi kono yubitomare Happy <br/>
                Tanoshinjaou yo Every day nichi nichi kore kou nichi <br/>
                Tanoshimeba ii kimochi <br/>
                Zenryoku You Only Live Once <br/>

            </Grid>

            <Grid item className="englishText">
                Let’s have fun! Every day “Every day is a good day” <br/>
                It’s the victory of people who had fun,  *lets meet up here, guys!* Happy! <br/>
                Lets have fun together, Every day “Every day is a good day” <br/>
                With all we can, You only live once! <br/>
            </Grid>
        </Grid>

        <Grid container item justifyContent="space-around" alignItems="center">
            <Grid item className="englishText">
                You Only Live Once... <br/>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
