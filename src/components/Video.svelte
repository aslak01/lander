<script>
	
	export let png
	export let mp4
	
	// These values are bound to properties of the video
	let time = 0;
	let duration;
	let paused = true;

	let showControls = true;
	let showControlsTimeout;
	let loaded = false;

	function handleMousemove(e) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => showControls = false, 2500);
		showControls = true;

		if (!(e.buttons & 1)) return; // mouse not down
		if (!duration) return; // video not loaded yet

		const { left, right } = this.getBoundingClientRect();
		time = duration * (e.clientX - left) / (right - left);
	}

	function handleMousedown(e) {
		// we can't rely on the built-in click event, because it fires
		// after a drag — we have to listen for clicks ourselves

		function handleMouseup() {
			if (paused) e.target.play();
			else e.target.pause();
			cancel();
		}

		function cancel() {
			e.target.removeEventListener('mouseup', handleMouseup);
		}

		e.target.addEventListener('mouseup', handleMouseup);

		setTimeout(cancel, 200);
	}

	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
		
	}
</script>
<section>
<div>
	<video
		poster="video/{png}"
		src="video/{mp4}"
		on:mousemove={handleMousemove}
		on:mousedown={handleMousedown}
		bind:currentTime={time}
		bind:duration
		bind:paused>
		<track kind="captions">
	</video>
</div>
</section>
	<!-- <div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
		<progress value="{(time / duration) || 0}"/>

		<div class="info">
			<span class="time">{format(time)}</span>
			<span>klikk for {paused ? 'å spille av' : 'pause'} / dra for å spole</span>
			<span class="time">{format(duration)}</span>
		</div>
	</div>
</div> -->


<style>
	div {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 3rem 0;
	}

	video {
		width: 90%;
		object-fit: inherit;
	}
</style>