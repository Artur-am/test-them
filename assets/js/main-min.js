function Route(e,t){e&&t(e)}!function(){let e=[];Route(document.getElementsByClassName("btn-consultation")[0],function(t){e.push({event:"btn-consultation",modal:"modal-consultation"})}),Route(document.getElementsByClassName("video-block-img")[0],function(t){e.push({event:"video-block-img",modal:"modal-video"})}),function(e){let t=null;for(let n of e)(t=document.getElementsByClassName(n.event)[0])&&t.addEventListener("click",function(e){var t;t=n.modal,document.body.classList.add("modal"),document.getElementsByClassName(t)[0].classList.add("modal-active")});document.getElementsByClassName("modal-close")[0].addEventListener("click",function(e){document.body.classList.remove("modal");let t=document.querySelector(".modal-item.modal-active");t&&t.classList.remove("modal-active")})}(e),function(){let e=document.querySelector("header.header"),t=function(t){e.classList.contains("nav-active")&&e.classList.remove("nav-active")};t(),document.getElementsByClassName("mob-menu")[0].addEventListener("click",function(t){e.classList.toggle("nav-active")}),window.addEventListener("resize",t,!1)}(),window.addEventListener("scroll",function(e){let t=document.querySelector("header.header");console.log(45),document.body.scrollTop>t.clientHeight||document.documentElement.scrollTop>t.clientHeight?(t.classList.add("f-nav"),t.classList.remove("wrapper")):t.classList.contains("f-nav")&&(t.classList.remove("f-nav"),t.classList.add("wrapper"))})}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiUm91dGUiLCJlbCIsImNvbGxiYWNrIiwibW9kYWxzV2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicHVzaCIsImV2ZW50IiwibW9kYWwiLCJpdGVtcyIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lIiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwicXVlcnlTZWxlY3RvciIsIm1vZGFsV2luZG93IiwiaGVhZGVyIiwicmVzaXplIiwiY29udGFpbnMiLCJ0b2dnbGUiLCJ3aW5kb3ciLCJNZWRpYU5hdiIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxUb3AiLCJjbGllbnRIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQU1DLEVBQUlDLEdBQ1pELEdBQ0NDLEVBQVNELElBSWhCLFdBMkZHLElBQUlFLEVBQWUsR0FFbkJILE1BQ0lJLFNBQVNDLHVCQUF1QixvQkFBb0IsR0FDcEQsU0FBU0osR0FDTEUsRUFBYUcsS0FBSyxDQUFDQyxNQUFVLG1CQUFvQkMsTUFBVSx5QkFJbkVSLE1BQ0lJLFNBQVNDLHVCQUF1QixtQkFBbUIsR0FDbkQsU0FBU0osR0FDTEUsRUFBYUcsS0FBSyxDQUFDQyxNQUFVLGtCQUFtQkMsTUFBVSxrQkFyR2xFLFNBQXFCQyxHQWVqQixJQUFJUixFQUFLLEtBQ1QsSUFBSSxJQUFJUyxLQUFRRCxHQUNaUixFQUFLRyxTQUFTQyx1QkFBdUJLLEVBQUtILE9BQU8sS0FFN0NOLEVBQUdVLGlCQUFpQixRQUFTLFNBQVNKLEdBVDlDLElBQW1CSyxFQUFBQSxFQVVHRixFQUFLRixNQVR2QkosU0FBU1MsS0FBS0MsVUFBVUMsSUFBSSxTQUM1QlgsU0FBU0MsdUJBQXVCTyxHQUFXLEdBQUdFLFVBQVVDLElBQUksa0JBYWhFWCxTQUFTQyx1QkFBdUIsZUFBZSxHQUFHTSxpQkFBaUIsUUF2Qm5FLFNBQW9CSixHQUNoQkgsU0FBU1MsS0FBS0MsVUFBVUUsT0FBTyxTQUMvQixJQUFJQyxFQUFjYixTQUFTYyxjQUFjLDRCQUN0Q0QsR0FDQ0EsRUFBWUgsVUFBVUUsT0FBTyxrQkFtR3pDRyxDQUFZaEIsR0FyQ1osV0FDSSxJQUFJaUIsRUFBU2hCLFNBQVNjLGNBQWMsaUJBRWhDRyxFQUFTLFNBQVNkLEdBRWZhLEVBQU9OLFVBQVVRLFNBQVMsZUFDekJGLEVBQU9OLFVBQVVFLE9BQU8sZUFTaENLLElBRUFqQixTQUFTQyx1QkFBdUIsWUFBWSxHQUFHTSxpQkFBaUIsUUFOL0MsU0FBU0osR0FDdEJhLEVBQU9OLFVBQVVTLE9BQU8sZ0JBTTVCQyxPQUFPYixpQkFBaUIsU0FBVVUsR0FBUSxHQXFCOUNJLEdBRUFELE9BQU9iLGlCQUFpQixTQTNEeEIsU0FBc0JKLEdBQ2xCLElBQ0lhLEVBQVNoQixTQUFTYyxjQUFjLGlCQUN4Q1EsUUFBUUMsSUFBSSxJQUVGdkIsU0FBU1MsS0FBS2UsVUFBYVIsRUFBT1MsY0FDbEN6QixTQUFTMEIsZ0JBQWdCRixVQUFZUixFQUFPUyxjQUU5Q1QsRUFBT04sVUFBVUMsSUFQTCxTQVFaSyxFQUFPTixVQUFVRSxPQUFPLFlBRXJCSSxFQUFPTixVQUFVUSxTQVZSLFdBV1JGLEVBQU9OLFVBQVVFLE9BWFQsU0FZUkksRUFBT04sVUFBVUMsSUFBSSxjQWpFckMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBSb3V0ZShlbCwgY29sbGJhY2spe1xyXG4gICAgaWYoZWwpe1xyXG4gICAgICAgIGNvbGxiYWNrKGVsKTtcclxuICAgIH1cclxufVxyXG5cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgZnVuY3Rpb24gbW9kYWxXaW5kb3coaXRlbXMpe1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gQ2xvc2VNb2RhbChldmVudCl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsXCIpO1xyXG4gICAgICAgICAgICBsZXQgcmVtb3ZlQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWl0ZW0ubW9kYWwtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBpZihyZW1vdmVDbGFzcyl7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gT3Blbk1vZGFsKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF0uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQgZWwgPSBudWxsO1xyXG4gICAgICAgIGZvcihsZXQgaXRlbSBvZiBpdGVtcyl7XHJcbiAgICAgICAgICAgIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpdGVtLmV2ZW50KVswXTtcclxuICAgICAgICAgICAgaWYoZWwpe1xyXG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBPcGVuTW9kYWwoaXRlbS5tb2RhbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC1jbG9zZVwiKVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQ2xvc2VNb2RhbCk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBNZWRpYU5hdigpe1xyXG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyLmhlYWRlclwiKTtcclxuICAgIFxyXG4gICAgICAgIGxldCByZXNpemUgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1hY3RpdmVcIikpe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQgY2xpY2tlZE5hdiA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJlc2l6ZShudWxsKTtcclxuICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2ItbWVudVwiKVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tlZE5hdik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gU2Nyb2xsV2luZG93KGV2ZW50KXtcclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJmLW5hdlwiO1xyXG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyLmhlYWRlclwiKTtcclxuICAgIGNvbnNvbGUubG9nKDQ1KTtcclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgKCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCAgPiBoZWFkZXIuY2xpZW50SGVpZ2h0ICkgfHxcclxuICAgICAgICAgICAgKCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gaGVhZGVyLmNsaWVudEhlaWdodCApXHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ3cmFwcGVyXCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBNZWRpYU5hdigpe1xyXG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyLmhlYWRlclwiKTtcclxuICAgIFxyXG4gICAgICAgIGxldCByZXNpemUgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1hY3RpdmVcIikpe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQgY2xpY2tlZE5hdiA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJlc2l6ZShudWxsKTtcclxuICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2ItbWVudVwiKVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tlZE5hdik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1vZGFsc1dpbmRvdyA9IFtdO1xyXG5cclxuICAgIFJvdXRlKFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY29uc3VsdGF0aW9uXCIpWzBdLFxyXG4gICAgICAgIGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICAgICAgbW9kYWxzV2luZG93LnB1c2goe1wiZXZlbnRcIiA6IFwiYnRuLWNvbnN1bHRhdGlvblwiLCBcIm1vZGFsXCIgOiBcIm1vZGFsLWNvbnN1bHRhdGlvblwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG4gICAgXHJcbiAgICBSb3V0ZShcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidmlkZW8tYmxvY2staW1nXCIpWzBdLFxyXG4gICAgICAgIGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICAgICAgbW9kYWxzV2luZG93LnB1c2goe1wiZXZlbnRcIiA6IFwidmlkZW8tYmxvY2staW1nXCIsIFwibW9kYWxcIiA6IFwibW9kYWwtdmlkZW9cIn0pO1xyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICBtb2RhbFdpbmRvdyhtb2RhbHNXaW5kb3cpO1xyXG5cclxuICAgIE1lZGlhTmF2KCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgU2Nyb2xsV2luZG93KTtcclxufSgpKTsiXSwiZmlsZSI6Im1haW4tbWluLmpzIn0=
