<script setup lang="ts"></script>

<template>
	<div class="header flex items-center pt-4 justify-between bg-grayBg h-[70px]">
		<img src="@/assets/img/header/logo.png" alt="logo" />
		<div
			class="cursor-pointer flex justify-center items-center w-28 h-11 rounded-md bg-primary text-darkBlue"
		>
			<img
				class="w-[15px] h-[15px] mr-3"
				src="@/assets/img/header/catalog.svg"
				alt=""
			/>
			Каталог
		</div>
		<div
			class="header-input bg-white rounded-md w-[406px] h-11 flex items-center justify-between"
		>
			<div class="flex items-center w-[88%]">
				<img class="mr-3" src="@/assets/img/header/search.svg" alt="" />
				<input type="text" placeholder="Поиск по сайту" class="h-5 w-full" />
			</div>
			<div
				class="rounded-md bg-primary cursor-pointer flex justify-center items-center w-7 h-7 mr-3"
			>
				<img src="@/assets/img/header/settings.svg" alt="" />
			</div>
		</div>
		<div class="flex items-center">
			<div class="flex items-center">
				<img src="@/assets/img/header/location.svg" alt="" />
				<p class="text-darkBlue underline ml-2">Москва</p>
			</div>
			<div class="flex items-center ml-5">
				<img src="@/assets/img/header/phone.svg" alt="" />
				<p class="text-darkBlue ml-2">8 (495) 775-5952</p>
			</div>
		</div>
		<div class="flex items-center">
			<button class="bg-none mr-3">
				<img src="@/assets/img/header/user.svg" alt="" />
			</button>
			<button class="bg-none mr-3">
				<img src="@/assets/img/header/heart.svg" alt="" />
			</button>
			<button class="bg-none mr-3">
				<img src="@/assets/img/header/cart.svg" alt="" />
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
