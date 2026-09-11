import logging
import time
import uuid

logger = logging.getLogger(__name__)



class DemoMiddleWare:
    def __init__(self, get_response):
        self.get_response = get_response
       
       
    def __call__(self, request):
        
        request_id = uuid.uuid4().hex[:8]
        start_time = time.perf_counter()
        
        
        user = request.user.username  if request.user.is_authenticated else "anonymous"
        
        logger.info(
            "Request Started: id = %s method =%s  path=%s  user=%s",
            request_id,
            request.method,
            request.path,
            user,
            
        )
        try: 
            response = self.get_response(request)
        except Exception:
            logger.exception(
             "Request failed: id=%s method=%s path=%s user=%s",
                request_id,
                request.method,
                request.path,
                user,
            )
            
            raise
        
        duration = time.perf_counter() - start_time
        
        response["X-Request-ID"] = request_id
        
        logger.info(
            "Request finished: id=%s status=%s duration=%.3fs",
             request_id,
            response.status_code,
            duration,
            
        )
        
        return response
      
      
        
      
