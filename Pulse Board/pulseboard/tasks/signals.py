import logging
from django.db.models.signals import post_save, pre_delete, m2m_changed
from django.dispatch import receiver
from .models import Task
from .tasks import send_task_assignment_notification

logger = logging.getLogger(__name__)

# Post Signal
@receiver(post_save, sender=Task)
def task_post_save_handler(sender, instance, created, **kwargs):
    if created:
        print(f"[SIGNAL post_save] Task Created: '{instance.title}' (ID: {instance.id}) . Enqueuing Celery Task...")

        user_email = instance.assigned_user.email if instance.assigned_user else None
        send_task_assignment_notification.delay(
            task_id=instance.id,
            task_title =instance.title,
            user_email = user_email
        )
    else:
         print(f"[SIGNAL post_save] Task Updated: '{instance.title}' (ID: {instance.id})")


@receiver(pre_delete, sender=Task)
def task_pre_delete_handler(sender, instance, **kwargs):
    print(f"[SIGNAL pre_delete] Task '{instance.title}' (ID: {instance.id}) is about to be deleted!")

@receiver(m2m_changed, sender=Task.tags.through)
def task_tags_changed_handler(sender, instance, action, pk_set, **kwargs):
    if action== "post_add":
        print(f"[SIGNAL m2m_changed] Added tags {pk_set} to Task '{instance.title}'")
    elif action == "post_remove":
        print(f"[SIGNAL m2m_changed] Removed tags {pk_set} from Task '{instance.title}'")

        
    
    
