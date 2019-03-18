function useSongStatus(currentSong, status, selectedSong = null) {
  const hasSong = !!currentSong;
  const isSelectedSong =
    hasSong && selectedSong && currentSong.id === selectedSong.id;
  const isPlaying = hasSong && status === 'PLAYING';
  const isPause = hasSong && status === 'PAUSED';
  const isStop = hasSong && status === 'STOPPED';
  const songName = hasSong ? currentSong.name : '';
  return { isPlaying, isPause, isStop, hasSong, isSelectedSong, songName };
}

export default useSongStatus;
