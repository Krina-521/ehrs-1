import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, switchMap, of, concatMap, BehaviorSubject } from 'rxjs';
import { Auth, signInWithEmailAndPassword, authState, createUserWithEmailAndPassword, updateProfile, UserInfo, UserCredential } from '@angular/fire/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  currentUser$ = authState(this.auth);

  constructor(
    private router: Router,
    private auth: Auth,
    private fireauth: AngularFireAuth
  ) { }

  isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, username, password));
    // this.fireauth.signInWithEmailAndPassword(username, password).then(() =>{
    //   localStorage.setItem('token', 'true');
    //   this.router.navigate(['/dashboard']);
    // }, err =>{
    //   this.router.navigate(['/login']);
    // })
  }

  signUp(name: any, email: any, password: any){
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({ user }) => updateProfile(user, { displayName: name}))
    );
    // this.fireauth.createUserWithEmailAndPassword(email, password).then(res=>{
    //   this.router.navigate(['/login']);
    //   this.sendEmailForVerfication(res.user);
    // }, err =>{
    //   alert(err.message);
    //   this.router.navigate(['/sign-up']);
    // })
  }

  forgotPassword(email : string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify-email']);
    }, err => {
      alert('Something went wrong');
    })
  }

  updateProfile(profileData: Partial<UserInfo>): Observable<any>{
    const user = this.auth.currentUser;
    console.log(user);
    return of(user).pipe(
      concatMap(user => {
        if(!user){ throw new Error("Not Authenticated"); }
        return updateProfile(user, profileData)
      })
    )
  }
  signInWithGoogle(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res =>{
      this.router.navigate(['/home']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid));
    }, err =>{
      alert(err.message);
    })
  }
}
