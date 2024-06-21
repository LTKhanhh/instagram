import classNames from "classnames/bind";

import styles from './StoryList.module.scss'
import StoryListItem from "../StoryListItem";
const cx = classNames.bind(styles)

function StoryList() {
    return (
        <div className={cx('container', 'grid', 'grid-cols-8')}>
            <StoryListItem name={'KhanhDepTrai123123123'} avatar={<img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg`}></img>}></StoryListItem>
            <StoryListItem name={'KhanhDepTrai123123123'} avatar={<img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg`}></img>}></StoryListItem>
            <StoryListItem name={'KhanhDepTrai123123123'} avatar={<img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg`}></img>}></StoryListItem>
            <StoryListItem name={'KhanhDepTrai123123123'} avatar={<img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg`}></img>}></StoryListItem>
            <StoryListItem name={'KhanhDepTrai123123123'} avatar={<img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg`}></img>}></StoryListItem>
            <StoryListItem name={'KhanhDepTrai123123123'} avatar={<img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg`}></img>}></StoryListItem>
            <StoryListItem name={'KhanhDepTrai123123123'} avatar={<img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg`}></img>}></StoryListItem>
            <StoryListItem name={'KhanhDepTrai123123123'} avatar={<img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg`}></img>}></StoryListItem>
        </div>
    );
}

export default StoryList;