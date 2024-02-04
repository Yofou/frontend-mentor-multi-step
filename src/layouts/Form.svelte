<main class="w-full min-h-screen bg-BG grid pt-0 md:pt-[6.56rem] justify-items-center ">
	<nav class="flex md:hidden w-full bg-Purple h-[10.75rem] flex-wrap justify-center  gap-8">
		<slot name="nav" />
	</nav>

	<section class="max-w-[940px] max-h-[600px] w-screen h-screen p-4 grid grid-cols-1 md:grid-cols-[274px,1fr] bg-White rounded-[.9375rem]">
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
</style>
