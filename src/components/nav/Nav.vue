<template>
  <Popover class="fixed left-0 w-full top-0 z-20 bg-accent-red shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          py-6
          md:justify-start md:space-x-5
        "
      >
        <div class="flex justify-start lg:w-0 flex-1">
          <router-link to="/">
            <span class="sr-only">Commercial by knnct</span>
            <div class="flex items-center">
              <img
                class="h-7 w-auto"
                src="@/assets/logo.svg"
                alt="Commercial by knnct"
              />
            </div>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-white
              hover:text-gray-500
              transition
              hover:bg-accent-light
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex">
          <div class="space-x-3 lg:space-x-5 xl:space-x-7 flex">
            <NavItem
              v-for="item in navigation"
              :path="item.path"
              :key="item.label"
              :dropdownItems="item.dropdownItems"
            >
              {{ item.label }}
            </NavItem>
          </div>
          <router-link to="/dashboard" class="block ml-4 -my-2">
            <div
              class="
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-white
                transition
                hover:bg-accent-light hover:bg-opacity-40
                cursor-pointer
                relative
              "
            >
              <span class="sr-only">Open menu</span>
              <BellIcon class="h-6 w-6 text-white" aria-hidden="true" />
              <span
                class="
                  absolute
                  font-medium
                  rounded-full
                  bg-accent-light
                  grid
                  place-items-center
                  bottom-1/2
                  left-1/2
                  text-sm
                  px-1.5
                  h-5
                "
                >4</span
              >
            </div>
          </router-link>
        </PopoverGroup>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          z-10
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-accent-dark
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <router-link to="/">
                <img
                  class="h-5 w-auto"
                  src="@/assets/logo.svg"
                  alt="Commercial by knnct"
                />
              </router-link>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    transition
                    hover:bg-accent-lightest
                  "
                >
                  <span class="sr-only">Close menu</span>
                  >
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <PopoverButton>
                  <router-link
                    v-for="item in navigation"
                    :key="item.label"
                    :to="item.path"
                    class="nav-item-mobile"
                  >
                    <span class="nav-item-mobile__text">{{ item.label }}</span>
                  </router-link>
                </PopoverButton>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
  <div class="nav-gap" />
</template>

<script>
import NavItem from "@/components/nav/NavItem.vue";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { MenuIcon, XIcon, BellIcon } from "@heroicons/vue/outline";
import { navigation } from "@/data";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
    BellIcon,
    NavItem,
  },
  setup() {
    return { navigation };
  },
};
</script>
