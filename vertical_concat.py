from moviepy.editor import VideoFileClip, clips_array
from tqdm import tqdm

def concat_videos_to_gif(mp4_paths, output_gif="output.gif", fps=15):
    """
    Vertically concatenates multiple MP4 files (same size & duration) 
    and saves the result as a GIF.

    Parameters
    ----------
    mp4_paths : list[str]
        List of input MP4 file paths.
    output_gif : str
        Path to save the output GIF.
    fps : int
        Frames per second for the output GIF.
    """
    # Load video clips with progress bar
    clips = []
    for path in tqdm(mp4_paths, desc="Loading MP4s"):
        clips.append(VideoFileClip(path))
    
    # Ensure all videos are the same duration
    min_duration = min([clip.duration for clip in clips])
    clips = [clip.subclip(0, min_duration) for clip in clips]

    # Arrange clips vertically
    final_clip = clips_array([[clip] for clip in clips])

    # Export as GIF
    print("Exporting to GIF...")
    final_clip.write_gif(output_gif, fps=fps)
    print(f"Done! Saved as {output_gif}")


if __name__ == "__main__":
    # Example usage
    mp4s = ["Billie_Jean_concate.mp4", "Birds_of_a_Feather_concate.mp4"]  # replace with your files
    concat_videos_to_gif(mp4s, "vertical_concat.gif", fps=10)
