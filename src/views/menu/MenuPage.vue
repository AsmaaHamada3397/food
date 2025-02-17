<script>
import ThroughApps from '../../components/menu/ThroughApps.vue';
import ViewMenu from '@/components/menu/ViewMenu.vue';

export default {
  name:'MenuPage',
  components: {
     ThroughApps,
     ViewMenu,
    }
}
</script>

<template>
  <div>
    <ViewMenu/>
    <ThroughApps/>
  </div>
</template>
