<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
        <Navbar/>
        <div class="sidebar-wrapper">
            <Sidebar class="sidebar-container"/>
        </div>
        <div class="main-container">
            <App-main/>
        </div>
    </div>
</template>

<script>
    import { Navbar, Sidebar, AppMain } from 'views/layout';

    export default {
      name: 'layout',
      components: {
        Navbar,
        Sidebar,
        AppMain
      },
      computed: {
        sidebar() {
          return this.$store.state.app.sidebar;
        }
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/assets/styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        &.hideSidebar {
            .sidebar-wrapper {
                transform: translate(-140px, 0);
                .sidebar-container {
                    transform: translate(132px, 0);
                }
                &:hover {
                    transform: translate(0, 0);
                    .sidebar-container {
                        transform: translate(0, 0);
                    }
                }
            }
            .main-container{
                margin-left: 40px;
            }
        }
        .sidebar-wrapper {
            width: 180px;
            position: fixed;
            top: 60px;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow-x: hidden;
            transition: all .28s ease-out;
            @include scrollBar;
        }
        .sidebar-container {
            transition: all .28s ease-out;
        }
        .main-container {
            padding: 0 15px;
            transition: all .28s ease-out;
            overflow: auto;
            position: absolute;
            top: 60px;right: 0;bottom: 0;left: 180px;
        }
    }
</style>
