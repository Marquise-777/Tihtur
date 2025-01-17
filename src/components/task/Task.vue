<template>
    <li class="list-group-item py-3">
        <div class="d-flex justify-content-start align-items-center">
            <input class="form-check-input mt-0 " :class="completedClass" type="checkbox" :checked="task.is_completed" />
            <div class="ms-2 flex-grow-1 " :class="completedClass" title="Double click the text to edit or remove">
                <!-- <div class="relative">
                    <input class="editable-task" type="text" />
                </div> -->
                <span>{{ task.name }}</span>
            </div>
            <!-- <div class="task-date">{{ task.created_at }}</div> -->
        </div>
        <div class="task-actions">
            <button class="btn btn-sm btn-circle btn-outline-secondary me-1">
             <Pencil/>
            </button>
            <button class="btn btn-sm btn-circle btn-outline-danger">
                <IconTrash />
            </button>
        </div>
    </li>
</template>

<script setup>
import Pencil from "../icons/Pencil.vue";

import IconTrash from '../icons/IconTrash.vue';

import { computed } from "vue";

const props = defineProps({
    task: Object,
})

const completedClass = computed(() => props.task.is_completed ? "completed" : "")
</script>