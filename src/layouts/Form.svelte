<main class="w-full min-h-screen bg-BG grid grid-cols-[1rem,1fr,1rem] auto-rows-max md:grid-cols-1 pt-0 md:pt-[6.56rem] justify-items-center pb-[94px] md:pb-0">
	<nav class="col-start-1 col-end-[-1] flex md:hidden w-full bg-Purple h-[10.75rem] flex-wrap pt-8 justify-center mobile-nav-bg bg-cover gap-4">
		<slot name="nav" />
	</nav>

	<section class="-mt-[4.5625rem] md:mt-0 col-start-2 col-end-2 md:col-start-auto md:col-end-auto max-w-[940px] md:max-h-[600px] w-full md:h-screen py-8 px-6 md:p-4 grid grid-cols-1 md:grid-cols-[274px,1fr] bg-White rounded-[.9375rem] [box-shadow:0px_25px_40px_-20px_rgba(0,0,0,0.10)]">
		<nav class="hidden md:flex flex-col bg-Purple rounded-[.625rem] py-10 pl-8 gap-8 nav-bg">
			<slot name="nav" />
		</nav>

		<slot name="form" />
	</section>
</main>

<style>
.nav-bg {
	background-image: url(/NavBg.svg);
	background-repeat: no-repeat;
	background-position: bottom;
}

.mobile-nav-bg {
	background-image: url(/mobile-bg.svg);
	background-repeat: no-repeat;
	background-position: bottom;
}
</style>
