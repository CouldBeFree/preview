var gulp        = require('gulp'),
		sass        = require('gulp-sass'),
		browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', function () {
	return gulp.src('app/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		port: 3030
	});
});

gulp.task('scripts', function() {
	return gulp.src(['app/js/index.js', 'app/libs/**/*.js'])
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
	return gulp.src('app/*.html')
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function (done) {
	gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
	gulp.watch('app/*.html', gulp.parallel('code'));
	gulp.watch(['app/js/index.js', 'app/libs/**/*.js'], gulp.parallel('scripts'));
	done();
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
