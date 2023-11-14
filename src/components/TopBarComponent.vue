<template>
  <fwb-navbar>
    <template #logo>
      <!-- <fwb-navbar-logo class=" appearance-none"></fwb-navbar-logo> -->
      <span style="visibility: hidden;"></span>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="#">
          <fwb-dropdown text="ES">
            <fwb-list-group>
              <fwb-list-group-item>
                ES
              </fwb-list-group-item>
              <fwb-list-group-item>
                EN
              </fwb-list-group-item>
            </fwb-list-group>
          </fwb-dropdown>
        </fwb-navbar-link>
        <fwb-navbar-link link="#">
          <fwb-dropdown text="Nombre de usuario">
            <fwb-list-group>
              <fwb-list-group-item>
                Profile
              </fwb-list-group-item>
              <fwb-list-group-item>
                Settings
              </fwb-list-group-item>
              <fwb-list-group-item>
                Exit
              </fwb-list-group-item>
            </fwb-list-group>
          </fwb-dropdown>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup lang="ts">
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbDropdown, FwbListGroup, FwbListGroupItem
} from 'flowbite-vue'

</script>