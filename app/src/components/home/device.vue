<template>
    <div class="card section bg-base-300 shadow-xl">
      <div class="card-body">
    
        <h2 class="card-title">Devices</h2>
        
        <div role="tablist" class="tabs tabs-boxed">
            <a v-for="device, i in devices" role="tab" class="tab" :class="device.selected ? 'tab-active' : ''" @click="select(device, i)">{{ device.name }}</a>
        </div>

      </div>
    </div>
    </template>
    
    <script>
    export default {
        data() {
            return {
                scrcpyPlusVersion: this.$version,

                devices: [
                    { name: 'Simulated Device 01', id: 'sim01', selected: true },
                    { name: 'Simulated Device 02', id: 'sim02', selected: false },
                    { name: 'Simulated Device 03', id: 'sim03', selected: false },
                ]
            }
        },
        methods: {
            deselect() {
                for (const i in this.devices) this.devices[i].selected = false;
            },
            select(device, index) {
                this.deselect();
                this.devices[index].selected = true;
            }
        }
    }
    </script>